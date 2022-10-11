from flask import Flask, render_template, redirect, url_for, jsonify, request
from flask_bootstrap import Bootstrap
from form import ContactForm

app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
Bootstrap(app)

#TODO


@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

@app.route('/contact',methods=['GET','POST'])
def get_contact():
    form=ContactForm()
    # if request.method=='POST':
    return render_template('contact.html',form=form)
if __name__ == "__main__":
    # app.run(host='0.0.0.0', port=5000)
    app.run(debug=True)