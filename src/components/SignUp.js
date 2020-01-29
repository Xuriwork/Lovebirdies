import React, { Component } from 'react';
import '../App.css';

export default class SignUp extends Component {
    render() {
        return (
        <div class="form-page-background">
        <div class="form-style-5">
        <form>
        <fieldset>
        <legend><span class="number">1</span> Registration</legend>
        <input type="text" name="field1" placeholder="Your Name *"/>
        <input type="email" name="field2" placeholder="Your Email *"/>
        <input type="text" name="field1" placeholder="Your Phone Number *"/>
        <input type="text" name="field1" placeholder="Your Home Address *"/>
        <input type="date" name="bday" min="2000-01-02" />
        <label for="job">Interests:</label>
        <select id="job" name="field4">
        <option value="fishkeeping">Fishkeeping</option>
        <option value="reading">Reading</option>
        </select>      
        </fieldset>
        <input type="submit" value="Apply" />
        </form>
        </div>
        </div>
        )
    }
}