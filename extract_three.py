import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('choigivui_exact_theater.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Tìm các đoạn tạo tường, đèn, sàn, ghế
import re
print("Length of theater code:", len(code))

# In 10 đoạn code chính
for i in range(0, len(code), 1200):
    print(f"=== PART {i} ===")
    print(code[i:i+1200])
