import threading
import time


# def func():
# 	print('ran')
# 	time.sleep(1)
# 	print('done')
# 	time.sleep(0.85)
# 	print('now done')

# x = threading.Thread(target=func)
# x.start()
# print(threading.active_count())
# time.sleep(0.9)
# print('finally')

def count(n):
	for i in range(1, n + 1):
		print(i)
		time.sleep(0.001)


for _ in range(2):
	x = threading.Thread(target=count, args=(10,))
	x.start()

print("Done")