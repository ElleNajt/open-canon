"""Tests for strip_markdown_fences."""

import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from main import strip_markdown_fences

CLEAN_CODE = """\
setcps(120/60/4)

$: s("bd ~ sn ~").gain(0.8)
$: s("hh*4").gain(0.5)
$: note("c3 eb3 g3").sound("sawtooth").lpf(800)"""


def test_clean_code_unchanged():
    assert strip_markdown_fences(CLEAN_CODE) == CLEAN_CODE


def test_markdown_fences_js():
    wrapped = f"```javascript\n{CLEAN_CODE}\n```"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_markdown_fences_plain():
    wrapped = f"```\n{CLEAN_CODE}\n```"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_markdown_fences_no_closing():
    wrapped = f"```javascript\n{CLEAN_CODE}"
    result = strip_markdown_fences(wrapped)
    assert "$:" in result
    assert not result.startswith("```")


def test_template_literal_wrapper():
    wrapped = f"`{CLEAN_CODE}`"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_const_template_literal():
    wrapped = f"const code = `{CLEAN_CODE}`;"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_let_template_literal():
    wrapped = f"let output = `{CLEAN_CODE}`"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_var_double_quote():
    # Double-quoted with escaped inner quotes
    import json
    inner = json.dumps(CLEAN_CODE)
    wrapped = f"const result = {inner};"
    result = strip_markdown_fences(wrapped)
    assert "$:" in result
    assert "setcps" in result


def test_bare_double_quote_json_string():
    import json
    wrapped = json.dumps(CLEAN_CODE)
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_bare_single_quote():
    wrapped = f"'{CLEAN_CODE}'"
    assert strip_markdown_fences(wrapped) == CLEAN_CODE


def test_double_quote_without_strudel_code_left_alone():
    """Don't unwrap quotes if it doesn't look like strudel code."""
    wrapped = '"just a plain string"'
    assert strip_markdown_fences(wrapped) == '"just a plain string"'


def test_markdown_fence_then_template_literal():
    """Nested wrapping: markdown fence around a template literal."""
    inner = f"`{CLEAN_CODE}`"
    wrapped = f"```javascript\n{inner}\n```"
    result = strip_markdown_fences(wrapped)
    assert strip_markdown_fences(result) == CLEAN_CODE


def test_multiline_with_backticks_in_code():
    """Code containing backticks (template literals) shouldn't be stripped."""
    code_with_backticks = """\
setcps(120/60/4)
$: s("bd cp").gain(0.8)
$: note(`c3 e3 g3`).sound("sine")"""
    # More than 2 backticks, so bare-backtick stripping shouldn't trigger
    assert strip_markdown_fences(code_with_backticks) == code_with_backticks


def test_const_with_single_quotes():
    wrapped = f"const code = '{CLEAN_CODE}';"
    result = strip_markdown_fences(wrapped)
    assert "$:" in result
    assert "setcps" in result


def test_whitespace_around_fences():
    wrapped = f"```js\n{CLEAN_CODE}\n```"
    result = strip_markdown_fences(wrapped)
    assert "$:" in result
    assert not result.startswith("```")


def test_real_world_escaped_newlines():
    """Model returns code as a JSON string with \\n instead of actual newlines."""
    import json
    code = 'setcps(120/60/4)\n\n$: s("bd sn").gain(0.8)\n$: s("hh*4")'
    wrapped = json.dumps(code)
    result = strip_markdown_fences(wrapped)
    assert result == code
