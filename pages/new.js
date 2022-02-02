import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch'; 
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if(Object.keys(errors).length === 0) {
                // createNote();
                alert('Success');
            }
            else {
                setIsSubmitting(false);
            }
        }
    },[errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    };

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    };

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }

        return err;
    };

    return (  
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline="centered" />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input 
                                fluid="true"
                                error={errors.title ? { content: "Please enter a title", pointing: "below" } : null}
                                label="Title"
                                placeholder="Title"
                                name="title"
                                onChange={handleChange}
                            />
                            <Form.TextArea 
                                fluid="true"
                                error={errors.description ? { content: "Please enter a description", pointing: "below" } : null}
                                label="Description"
                                placeholder="Description"
                                name="description"
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
    );
}
 
export default NewNote;