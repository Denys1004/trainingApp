import time

def coutdown():
    while True:

        timer=4
        print("REST")
        while timer>0:
            print(timer)
            time.sleep(1)
            timer -= 1
        
        timer = 5
        print("WORKOUT")
        while timer>0:
            print(timer)
            time.sleep(1)
            timer -= 1
coutdown()




# while(true){

#     sec = 4;
#     while(sec>0){
#         console.log(sec + 'Rest');
#         setTimeout(1000);
#         sec=sec-1;
#     }

#     sec = 6;
#     while(sec>0){
#         console.log(sec + 'Workout');
#         setTimeout(1000);
#         sec=sec-1;
#     }
# }