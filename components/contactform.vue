<template>
  <b-container class="mt-2">
    <h1>{{$t('contact_header')}}</h1>
    <p>{{$t('contact_text')}}</p>
    <b-form action="POST" data-netlify="true">
      <b-row>
        <b-col>
          <b-form-group
            id="label-firstname"
            label="Firstname *"
            label-for="firstname"
          >
            <b-form-input
              id="firstname"
              type="text"
              required
              placeholder="Please enter your firstname *"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-lastname"
            label="Lastname *"
            label-for="lastname"
          >
            <b-form-input
              id="lastname"
              type="text"
              required
              placeholder="Please enter your lastname *"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="label-email"
            label="Email *"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              type="email"
              required
              placeholder="Please enter your email *"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="label-name"
            label="Please specify your need *"
            label-for="select"
          >
            <b-form-select
              id="select"
              v-model="selected"
              :options="options"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group>
            <b-form-textarea
              id="textarea"
              placeholder="Please, leave us a message."
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col col="12">
          <div data-netlify-recaptcha="true"></div>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-button variant="success" type="submit">Send message</b-button>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-container>

  <!-- <form id="contact-form" method="post" action="contact.php" role="form">
    <div class="messages"></div>

    <div class="controls">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="form_name">Firstname *</label>
            <input
              id="form_name"
              type="text"
              name="name"
              class="form-control"
              placeholder="Please enter your firstname *"
              required="required"
              data-error="Firstname is required."
            />
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="form_lastname">Lastname *</label>
            <input
              id="form_lastname"
              type="text"
              name="surname"
              class="form-control"
              placeholder="Please enter your lastname *"
              required="required"
              data-error="Lastname is required."
            />
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="form_email">Email *</label>
            <input
              id="form_email"
              type="email"
              name="email"
              class="form-control"
              placeholder="Please enter your email *"
              required="required"
              data-error="Valid email is required."
            />
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="form_need">Please specify your need *</label>
            <select
              id="form_need"
              name="need"
              class="form-control"
              required="required"
              data-error="Please specify your need."
            >
              <option value></option>
              <option value="Request quotation">Request quotation</option>
              <option value="Request order status">Request order status</option>
              <option
                value="Request copy of an invoice"
              >Request copy of an invoice</option>
              <option value="Other">Other</option>
            </select>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="form_message">Message *</label>
            <textarea
              id="form_message"
              name="message"
              class="form-control"
              placeholder="Message for me *"
              rows="4"
              required="required"
              data-error="Please, leave us a message."
            ></textarea>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="col-md-12">
          <input
            type="submit"
            class="btn btn-success btn-send"
            value="Send message"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">
            <strong>*</strong> These fields are required. Contact form template by
            <a
              href="https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form"
              target="_blank"
            >Bootstrapious</a>.
          </p>
        </div>
      </div>
    </div>
  </form>-->
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>