
const Subject = () => {
  return (
    <div className="classroom_details">

      <div className="classroom_details_header">
        <h1> Mathematics</h1>
        <h6>  <b>Subject Code:</b> Maths 001</h6>
        <h6> <b>Level:</b> Nusery School</h6>
        <h6> <b>Assigned Teacher:</b> Hart Hagerty
        </h6>
      </div>

      <div className="classroom_student_details">

        <div className="classroom_student">
          <h5><b>Topics(10)</b></h5>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
        </div>

        <div className=" overflow-x-auto">
          <table className="table">

            <thead>
              <tr>
                <th>Title</th>
                <th>About</th>

                <th></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td> Introduction </td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, perferendis nobis mollitia nam ipsam consequuntur et soluta illum, fugiat odit voluptatem molestias ea quod itaque commodi! Tempora, vero beatae?

                </td>


              </tr>

              <tr>
                <td> Bodmas </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, voluptates iure nobis expedita odio soluta praesentium quod, quae repellat fugiat tenetur temporibus autem dolorem eaque rerum repellendus. Impedit, eaque?
                </td>


              </tr>

              <tr>
                <td> Factorial </td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, perferendis nobis mollitia nam ipsam consequuntur et soluta illum, fugiat odit voluptatem molestias ea quod itaque commodi! Tempora, vero beatae?
                </td>
              </tr>

              <tr>
                <td> Equations </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, voluptates iure nobis expedita odio soluta praesentium quod, quae repellat fugiat tenetur temporibus autem dolorem eaque rerum repellendus. Impedit, eaque?
                </td>

              </tr>

              <tr>
                <td> Algebral </td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, perferendis nobis mollitia nam ipsam consequuntur et soluta illum, fugiat odit voluptatem molestias ea quod itaque commodi! Tempora, vero beatae?
                </td>
              </tr>

              <tr>
                <td> Mulitplications </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, voluptates iure nobis expedita odio soluta praesentium quod, quae repellat fugiat tenetur temporibus autem dolorem eaque rerum repellendus. Impedit, eaque?
                </td>

              </tr>

              <tr>
                <td> Factorial </td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, perferendis nobis mollitia nam ipsam consequuntur et soluta illum, fugiat odit voluptatem molestias ea quod itaque commodi! Tempora, vero beatae?
                </td>
              </tr>

              <tr>
                <td> Equations </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, voluptates iure nobis expedita odio soluta praesentium quod, quae repellat fugiat tenetur temporibus autem dolorem eaque rerum repellendus. Impedit, eaque?
                </td>

              </tr>

              <tr>
                <td> Algebral </td>
                <td>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, perferendis nobis mollitia nam ipsam consequuntur et soluta illum, fugiat odit voluptatem molestias ea quod itaque commodi! Tempora, vero beatae?
                </td>
              </tr>

              <tr>
                <td> Mulitplications </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, voluptates iure nobis expedita odio soluta praesentium quod, quae repellat fugiat tenetur temporibus autem dolorem eaque rerum repellendus. Impedit, eaque?
                </td>

              </tr>

            </tbody>

          </table>
        </div>

      </div>


    </div>
  )
}

export default Subject