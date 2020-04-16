from flask import Flask, render_template
import time

app=Flask(__name__)

@app.route('/')					
def pageone():
    return render_template('pageone.html')

@app.route('/pagetwo/')					
def pagetwo():
    return render_template('pagetwo.html')



if __name__=='__main__':
    app.run(debug=True) 