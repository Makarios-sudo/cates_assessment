

const StudentClassMate = () => {
    return (
        <div className="teachers_container">

            <div className="onboarding_teachers">
                <h1>ClassMates Subjects (25)</h1>
                <div className="searchField">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered input-accent w-full max-w-xs searchInput"
                    />

                </div>

            </div> <hr />

            <div className=" overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Full Name</th>
                            <th>Picture</th>
                            <th>Hobbies</th>
                            <th>Study Group</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td> Hart Hagerty </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Swimming, Reading</td>
                            <td> Rotary Club</td>
                        </tr>

                        <tr>
                            <td> Hagerty Owen </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Eating, Cooking</td>
                            <td> Nil</td>
                        </tr>

                        <tr>
                            <td> Evelin Rose </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Reading, Sleeping</td>
                            <td> Maths Club</td>
                           
                        </tr>

                        <tr>
                            <td> Catherine Flow </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td> Fishing</td>
                            <td>Music Club</td>
                        </tr>

                        <tr>
                            <td> John Aloud </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Singing, Dancing</td>
                            <td> Music Group</td>
                           
                        </tr>

                        <tr>
                            <td> Mary Jolly </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Reading, Dancing</td>
                            <td>  English Club</td>
                        </tr>

                        <tr>
                            <td> Hope Garner </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Sleeping, Eating</td>
                            <td> Nil</td>
                            
                        </tr>

                        <tr>
                            <td> Ethan German </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                
                                </div>
                            </td>
                            <td>Coding, Thinking</td>
                            <td> Tech Club</td>
                           
                        </tr>

                        <tr>
                            <td> Dorcas Joe </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                                className="image_profile"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td> Baking, Sewing </td>
                            <td>Rotary Club</td>
                        </tr>

                       
                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default StudentClassMate
