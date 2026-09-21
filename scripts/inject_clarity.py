#!/usr/bin/env python3
"""Inject Microsoft Clarity into public HTML when CLARITY_PROJECT_ID is set.

Delegates to scripts/inject_clarity.mjs (Node) so Railway and local usan la misma lógica.
"""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = Path(__file__).resolve().parent / "inject_clarity.js"


def inject_all() -> None:
    subprocess.check_call(["node", str(SCRIPT)], cwd=str(ROOT))


if __name__ == "__main__":
    try:
        inject_all()
    except subprocess.CalledProcessError as exc:
        sys.exit(exc.returncode)
