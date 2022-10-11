from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, URL,Email
from flask_ckeditor import CKEditor, CKEditorField
##WTForm
class ContactForm(FlaskForm):
    name = StringField("Your Name", validators=[DataRequired()])
    email = StringField("Your Email", validators=[DataRequired(),Email()])
    phone = StringField("Your Phone", validators=[DataRequired()])
    company = StringField("Your Company", validators=[DataRequired()])
    message = CKEditorField("Your Message", validators=[DataRequired()])
    submit = SubmitField("Submit ——>")