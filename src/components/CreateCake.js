import React from 'react';

const CreateCake = () => (
  <div className='cake-create'>
    <form>
      <label for="name">Name</label>
      <input type="text" placeholder="Name" id="name" name="name" />
      <label for="comment">Comment</label>
      <textarea id="comment" name="comment" />
      <label for="imageurl">Image URL</label>
      <input type="text" placeholder="Image URL" id="imageurl" name="imageUrl" />
      <label for="yumfactor">Yum Factor</label>
      <select name="yumFactor" id="yumfactor" defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button value="submit">Submit</button>
    </form>
  </div>
);

export default CreateCake;
