"""Escribe ../00-EMPIEZA-AQUI.html con los datos de la simulación. Uso: python3 panel.py"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
data = json.load(open(os.path.join(HERE, "..", "5-simulacion", "resultados.json"), encoding="utf-8"))
html = open(os.path.join(HERE, "panel.html"), encoding="utf-8").read().replace("__DATA__", json.dumps(data, ensure_ascii=False))
open(os.path.join(HERE, "..", "00-EMPIEZA-AQUI.html"), "w", encoding="utf-8").write(html)
print("00-EMPIEZA-AQUI.html listo")
