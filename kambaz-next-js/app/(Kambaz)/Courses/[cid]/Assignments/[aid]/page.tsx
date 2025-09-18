export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      
      <label htmlFor="wd-description">Assignment Description</label><br />
      <textarea id="wd-description" rows={10} cols={80} defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."></textarea><br /><br />
      
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="On Paper">On Paper</option>
            </select>
          </td>
        </tr>
      </table><br />
      
      <h3>Online Entry Options</h3>
      <input type="checkbox" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label><br />
      
      <input type="checkbox" id="wd-website-url" defaultChecked />
      <label htmlFor="wd-website-url">Website URL</label><br />
      
      <input type="checkbox" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label><br />
      
      <input type="checkbox" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label><br />
      
      <input type="checkbox" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
      
      <h3>Assign</h3>
      <label htmlFor="wd-assign-to">Assign to</label>
      <input id="wd-assign-to" defaultValue="Everyone" />
      <button>×</button><br />
      
      <label htmlFor="wd-due-date">Due</label>
      <input type="date" id="wd-due-date" defaultValue="2024-05-13" /><br />
      
      <label htmlFor="wd-available-from">Available from</label>
      <input type="date" id="wd-available-from" defaultValue="2024-05-06" /><br />
      
      <label htmlFor="wd-available-until">Until</label>
      <input type="date" id="wd-available-until" defaultValue="2024-05-20" /><br /><br />
      
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
