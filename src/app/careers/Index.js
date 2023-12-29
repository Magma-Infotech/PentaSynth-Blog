import React from "react";

export default function Index() {
  return (
    <div
      style={{
        marginTop: "8%",
      }}
    >
      <div class="container mt-5 col-md-8">
        <h1 class="text-center mb-4">Available Jobs</h1>

        <form className="col-md-5 mx-auto">
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>All Location</option>
              <option>India (Pune, Maharashtra)</option>
              <option>India (Nanded, Maharashtra)</option>
              <option>India (Mumbai, Maharashtra)</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </form>

        <h2 class="mb-3">Engineering</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Stack Developer - Project Alpha</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>iOS/Swift Developer - Project Alpha</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>JavaScript Developer</td>
              <td>Toronto, Canada</td>
            </tr>
            <tr>
              <td>Ruby on Rails Programmer</td>
              <td>Remote</td>
            </tr>
            <tr>
              <td>Senior QA Engineer</td>
              <td>London, United Kingdom</td>
            </tr>
          </tbody>
        </table>

        <h2 class="mt-4 mb-3">Marketing</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B2B Marketing Director</td>
              <td>Toronto, Canada</td>
            </tr>
            <tr>
              <td>Content Marketing Manager - Video</td>
              <td>London, United Kingdom</td>
            </tr>
            <tr>
              <td>Marketing Intern</td>
              <td>Toronto, Canada</td>
            </tr>
          </tbody>
        </table>

        <h2 class="mt-4 mb-3">Finance</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Junior Financial Analyst</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>Senior Financial Analyst</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>

        <h2 class="mt-4 mb-3">Customer Service</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Administrative Support Manager</td>
              <td>London, United Kingdom</td>
            </tr>
            <tr>
              <td>Customer Service Representative</td>
              <td>Remote</td>
            </tr>
            <tr>
              <td>Quality Analyst - Call Center</td>
              <td>Remote</td>
            </tr>
          </tbody>
        </table>

        <div class="perks mx-auto col-md-8">
          <h1 class="mt-4 mb-3 ">Perks</h1>
          <div class="perk">
            <h2 className="text-muted">Flexible Work Hours:</h2>
            Want to take Friday off or work from home all week? No problem! We
            trust our employees and truly believe in work-life balance as a key
            to productive work.
          </div>
          <div class="perk">
            <h2 className="text-muted">Healthcare:</h2>
            Our comprehensive healthcare package includes dental coverage and
            options to cover your whole family.
          </div>
          <div class="perk">
            <h2 className="text-muted"> Best Working Environment:</h2>
            Our modern offices have everything you need in your daily work:
            sit/stand workstations, free food (drinks/coffee, fruits, cookies,
            etc.), spaces to relax, PlayStation, ping-pong table, and free
            parking for your car or a bike.
          </div>
          <div class="perk">
            <h2 className="text-muted"> Room to Grow:</h2>
            We make sure everyone has an opportunity to grow. Found something
            you want to learn? Great! We'll pay for your training/education.
          </div>
          <div class="perk">
            <h2 className="text-muted">Everyone Has a Voice:</h2>
            Innovation doesn't have a hierarchy. We make sure everyone is heard,
            considered, and respected.
          </div>
          <div class="perk">
            <h2 className="text-muted">Sports:</h2>
            We subsidize your gym membership, or fees for any other sport you
            prefer. Also, you're welcome to join our basketball team playing
            once a week near the office.
          </div>
        </div>
      </div>
    </div>
  );
}
