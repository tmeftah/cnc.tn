<template>
  <b-container class="mt-5">
    <h1
      class="text-uppercase"
      style="font-weight:normal;color:#0b3b6c;  font-size:2.4em;"
    >{{$t('contact_header')}}</h1>
    <b-row class="mt-4">
      <b-col cols="12" lg="4">
        <p
          v-html="$t('contact_text')"
          style="color:rgb(95, 95, 95)"
          class="text-justify"
        ></p>
      </b-col>
      <b-col>
        <form
          id="contactus"
          method="post"
          :action="localePath('/contact')"
          role="form"
          name="contactus"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="messages"></div>

          <div class="controls">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="hidden" name="form-name" value="contactus" />
                  <label for="form_name">{{$t('Firstname')}} *</label>
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    class="form-control"
                    :placeholder="$t('label_firstname')"
                    required="required"
                    data-error="Firstname is required."
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_lastname">{{$t('lastname')}} *</label>
                  <input
                    id="form_lastname"
                    type="text"
                    name="surname"
                    class="form-control"
                    :placeholder="$t('label_lastname')"
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
                    :placeholder="$t('label_email')"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_need">{{$t('need_label')}} *</label>
                  <select
                    id="form_need"
                    name="need"
                    class="form-control"
                    required="required"
                    data-error="Please specify your need."
                  >
                    <option value></option>
                    <option
                      value="Request quotation"
                    >{{$t('request_quotation')}}</option>
                    <option
                      value="Request order status"
                    >{{$t('request_order_status')}}</option>
                    <option
                      value="Request copy of an invoice"
                    >{{$t('request_copy_of_an_invoice')}}</option>
                    <option value="Other">{{$t('other')}}</option>
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
                    :placeholder="$t('label_message')"
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
                  :value="$t('btn-send-message')"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="text-muted mt-2">
                  <strong>*</strong>
                  {{$t('required')}}.
                </p>
              </div>
            </div>
          </div>
        </form>
      </b-col>
    </b-row>
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