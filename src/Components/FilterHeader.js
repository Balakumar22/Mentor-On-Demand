import SelectBtn from "../Components/SelectBtn";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MentorCard from "./MentorCard";

const data = {
  categories: {
    Engineering_Data: {
      Name: "Engineering & Data",
      skills: {
        machine_learning: [
          {
            name: "Balakumar A N",
            country: "IN",
            imageUrl:
              "https://cdn.mentorcruise.com/cache/4071f3f9a0325194b77ef738bce53907/8ee71d5cecd4ec83/db94a9431a38949dc99cc742551427a5.jpg",
            designation: "Director of Engineering",
            occupation: "Mentor & Coach",
            company: "Mark43",
            tag: "Top",
            rating: 4.5,
            reviewCount: 63,
            chat: true,
            call: true,
            callCount: 2,
            task: true,
            handsOn: true,
            description:
              "An established technical leader for product and commercial teams. Experience and interest with product development with a focus on UX and customers.I have provided mentorship over the last several years to 25+ mentees. I have helped aspiring and senior engineers alike. Whether it is trying to learn a new Frontend technology, trying to build projects with a timeline, trying to mimic industry-like agile processes, unblocking or brainstorming on an architectural decision or tech stack, solving a bug or code issue - I am happy to assist and work with you! My responsibilities revolve around active code contribution, championing technical vision, stakeholder management, technical product management and release coordination.",
            price: 300,
            totalSpots: 120,
            spotsLeft: 120,
            skills: ["Python", "Engineering & Data", "frontend"],
          },
        ],
      },
    },
    UX_Design: {
      Name: "UX & Design",
      skills: {
        css: [
          {
            name: "Arunkumar A N",
            country: "IN",
            imageUrl:
              "https://cdn.mentorcruise.com/cache/b3fa2dff79232d72c2870bead61afc36/13dbd05532200123/9c1224b0d8c4a722fc6f410d4ec5a8c6.jpg",
            designation: "Director of Engineering",
            occupation: "Mentor & Coach",
            company: "Mark44",
            tag: "Top",
            rating: 4.9,
            reviewCount: 69,
            chat: true,
            call: true,
            callCount: 1,
            task: true,
            handsOn: true,
            description:
              "An established technical leader for product and commercial teams. Experience and interest with product development with a focus on UX and customers.I have provided mentorship over the last several years to 25+ mentees. I have helped aspiring and senior engineers alike. Whether it is trying to learn a new Frontend technology, trying to build projects with a timeline, trying to mimic industry-like agile processes, unblocking or brainstorming on an architectural decision or tech stack, solving a bug or code issue - I am happy to assist and work with you! My responsibilities revolve around active code contribution, championing technical vision, stakeholder management, technical product management and release coordination.",
            price: 350,
            totalSpots: 100,
            spotsLeft: 100,
            skills: [
              "Html",
              "CSS",
              "Bootstrap",
              "SASS",
              "Javascript",
              "Frontend",
            ],
          },
        ],
        sass: [
          {
            name: "Andrew",
            country: "US",
            imageUrl:
              "https://cdn.mentorcruise.com/cache/4071f3f9a0325194b77ef738bce53907/8ee71d5cecd4ec83/db94a9431a38949dc99cc742551427a5.jpg",
            designation: "Director of Engineering",
            occupation: "Mentor & Coach",
            company: "Mark45",
            tag: "Top",
            rating: 4.1,
            reviewCount: 51,
            chat: true,
            call: true,
            callCount: 4,
            task: true,
            handsOn: true,
            description:
              "An established technical leader for product and commercial teams. Experience and interest with product development with a focus on UX and customers.I have provided mentorship over the last several years to 25+ mentees. I have helped aspiring and senior engineers alike. Whether it is trying to learn a new Frontend technology, trying to build projects with a timeline, trying to mimic industry-like agile processes, unblocking or brainstorming on an architectural decision or tech stack, solving a bug or code issue - I am happy to assist and work with you! My responsibilities revolve around active code contribution, championing technical vision, stakeholder management, technical product management and release coordination.",
            price: 100,
            totalSpots: 50,
            spotsLeft: 50,
            skills: [
              "Html",
              "CSS",
              "Bootstrap",
              "SASS",
              "Javascript",
              "Frontend",
            ],
          },
        ],
        javascript: [
          {
            name: "Balakumar A N",
            country: "IN",
            imageUrl:
              "https://cdn.mentorcruise.com/cache/4071f3f9a0325194b77ef738bce53907/8ee71d5cecd4ec83/db94a9431a38949dc99cc742551427a5.jpg",
            designation: "Director of Engineering",
            occupation: "Mentor & Coach",
            company: "Mark43",

            rating: 4.5,
            reviewCount: 63,
            chat: true,
            call: true,
            callCount: "Regular",
            task: true,
            handsOn: true,
            description:
              "An established technical leader for product and commercial teams. Experience and interest with product development with a focus on UX and customers.I have provided mentorship over the last several years to 25+ mentees. I have helped aspiring and senior engineers alike. Whether it is trying to learn a new Frontend technology, trying to build projects with a timeline, trying to mimic industry-like agile processes, unblocking or brainstorming on an architectural decision or tech stack, solving a bug or code issue - I am happy to assist and work with you! My responsibilities revolve around active code contribution, championing technical vision, stakeholder management, technical product management and release coordination.",
            price: 300,
            totalSpots: 120,
            spotsLeft: 120,
            skills: ["Html", "CSS", "Javascript", "Typescript", "Frontend"],
          },
        ],
      },
    },
    Business_Management: {
      Name: "Business & Management",
      skills: {},
    },
    Product_Marketing: {
      Name: "Product & Marketing",
      skills: {},
    },
  },
};

const categories = Object.keys(data.categories).map(
  (category) => data.categories[category].Name
);

let skills = [];
let filterData = [];

Object.keys(data.categories).map((category) =>
  Object.keys(data.categories[category].skills).map((skill) => {
    if (!skills.includes(skill)) {
      skills.push(skill);
    }
  })
);

const FilterHeader = () => {
  const { category } = useParams();

  const [sortBy, setSortBy] = useState("Recommended");
  const [cat, setCat] = useState("Category");
  const [activeSort, setActiveSort] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSkill, setActiveSkill] = useState("");
  const [activePrice, setActivePrice] = useState("");
  const [bold, setBold] = useState(null);
  const [skillSet, setSkillSet] = useState([category]);
  const [filterSkills, setFilterSkills] = useState("");
  const [balanceSkills, setBalanceSkills] = useState(
    skills.filter((skill) => {
      return skill.toLowerCase() !== category.toLowerCase();
    })
  );
  const [price, setPrice] = useState([]);
  const [filter, setFilter] = useState(data.categories);
  const [filSkills, setFilSkills] = useState([...balanceSkills]);
  const [mentors, setMentors] = useState([]);

  const setActive = (setState, data) => {
    setState(data === "" ? "active" : "");
  };

  const setSort = (e) => {
    setSortBy(e.currentTarget.ariaValueText);
  };

  const addSkillFromFilter = (e) => {
    console.log(balanceSkills);
    const remainSkills = balanceSkills.filter((skill) => {
      console.log(
        skill + "!==" + e.target.name + "\t" + skill !== e.target.name
      );
      return skill !== e.target.name;
    });

    setBalanceSkills(remainSkills);
    setSkillSet([...skillSet, e.target.name]);
  };
  const removeSkillFromFilter = (e) => {
    const remainSkills = skillSet.filter((skill) => {
      return skill !== e.target.name;
    });

    setSkillSet(remainSkills);
    setBalanceSkills([...balanceSkills, e.target.name]);
  };

  const filterByCategory = () => {
    if (cat === "Category") {
      return data.categories;
    } else {
      return data.categories[
        Object.keys(data.categories).filter((category) => {
          return data.categories[category].Name === cat;
        })
      ];
    }
  };

  const filterBySkills = () => {
    // setFilter(filterByCategory());

    const skills = skillSet.map((skill) => {
      return Object.keys(filter).filter((data) => {
        let sk = filter[data].skills;
        // console.log(sk[Object.keys(sk).find(s=>{return s===skill})]);
        return sk[
          Object.keys(sk).find((s) => {
            return s === skill;
          })
        ];
      });
    });

    return skills;
  };

  useEffect(() => {
    Object.keys(filter).map((category) => {
      Object.keys(filter[category].skills).map((skill) => {
        filter[category].skills[skill].map((mentor) => {
          filterData.push(mentor);
        });
      });
    });
    setMentors(filterData);
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    // if(skillSet.length===0)
    setFilter(filterByCategory());
    // else
    // setFilter(filterBySkills());
  }, [cat]);

  useEffect(() => {
    // console.log(filterBySkills());
    // setFilter(filterBySkills());
  }, [skillSet]);

  useEffect(() => {
    setFilSkills(balanceSkills);
  }, [balanceSkills]);

  useEffect(() => {
    const remain = balanceSkills.filter((skill) => {
      return skill.includes(filterSkills) === true;
    });
    setFilSkills(remain);
  }, [filterSkills]);

  useEffect(() => {
    console.log(mentors);
  }, [mentors]);

  return (
    <>
      <div className="filter-container">
        <div className="filter-container-top">
          <div className="search-box">
            <input
              className="filter-search"
              type="search"
              placeholder='Try "Javascript" or "UX Designer"'
            />
            <ion-icon name="search" class="md hydrated icon"></ion-icon>
          </div>
          <div className="Sort">
            <button
              className={`sort-btn ${activeSort ? "clicked" : ""}`}
              onClick={() => setActive(setActiveSort, activeSort)}
            >
              <span>Sort by {sortBy}</span>
              <ion-icon
                name={activeSort ? "arrow-round-up" : "arrow-round-down"}
                class="md hydrated icon"
              ></ion-icon>
            </button>
            <div className={`dropDown ${activeSort}`}>
              <p aria-valuetext="Recommended" onClick={setSort}>
                Recommended
              </p>
              <p aria-valuetext="Newest" onClick={setSort}>
                Newest
              </p>
              <p aria-valuetext="Rating" onClick={setSort}>
                Top Rated
              </p>
              <p aria-valuetext="Experience" onClick={setSort}>
                Most Experienced
              </p>
            </div>
          </div>
        </div>
        <div className="filter-container-bottom">
          <div className="filter-btn-container">
            <div className="Category">
              <button
                className={`category-btn ${activeCategory ? "clicked" : ""}`}
                onClick={() => setActive(setActiveCategory, activeCategory)}
              >
                <span>{cat === "All Category" ? "Category" : cat}</span>
                <ion-icon
                  name="arrow-dropdown"
                  class="md hydrated icon"
                ></ion-icon>
              </button>
              <div className={`dropDown ${activeCategory}`}>
                <ul>
                  <li
                    onClick={(e) => {
                      setCat("Category");
                    }}
                    style={
                      cat === "Category"
                        ? { fontWeight: "bold" }
                        : { fontWeight: "normal" }
                    }
                  >
                    All Category
                  </li>
                  {categories.map((c) => {
                    return (
                      <li
                        key={c}
                        onClick={(e) => {
                          setCat(e.currentTarget.innerText);
                        }}
                        style={
                          cat === c
                            ? { fontWeight: "bold" }
                            : { fontWeight: "normal" }
                        }
                      >
                        {c}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="Skills">
              <button
                className={`skill-btn ${activeSkill ? "clicked" : ""}`}
                onClick={() => setActive(setActiveSkill, activeSkill)}
              >
                {skillSet.length > 0 ? skillSet.length : ""} Skills{" "}
                <ion-icon
                  name="arrow-dropdown"
                  class="md hydrated icon"
                ></ion-icon>
              </button>
              <div className={`dropDown ${activeSkill}`}>
                <ul>
                  <input
                    value={filterSkills}
                    type="search"
                    placeholder="Search by skill"
                    onChange={(e) => setFilterSkills(e.target.value)}
                  />
                  {skillSet.length > 0 && (
                    <div className="selectedSkills">
                      {skillSet.map((skill) => {
                        return (
                          <div key={skill} className="skill-item">
                            <input
                              id={skill}
                              type="checkbox"
                              name={skill}
                              checked={true}
                              onChange={(e) => {
                                if (!e.target.checked) removeSkillFromFilter(e);
                                else addSkillFromFilter(e);
                              }}
                            />
                            <label htmlFor={skill}>{skill}</label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {filSkills.map((skill) => {
                    return (
                      <div className="skill-item">
                        <input
                          id={skill}
                          type="checkbox"
                          name={skill}
                          checked={false}
                          onChange={(e) => {
                            if (!e.target.checked) removeSkillFromFilter(e);
                            else addSkillFromFilter(e);
                          }}
                        />
                        <label htmlFor={skill}>{skill}</label>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="Price">
              <button
                className={`price-btn ${activePrice ? "clicked" : ""}`}
                onClick={() => setActive(setActivePrice, activePrice)}
              >
                <span>
                  {price.length ? `$${price[0]} - ${price[1]}` : "Price"}
                </span>
                <ion-icon
                  name="arrow-dropdown"
                  class="md hydrated icon"
                ></ion-icon>
              </button>
              <div className={`dropDown ${activePrice}`}>
                <ul>
                  <li onClick={() => setPrice([0, 100])}>$0 - 100</li>
                  <li onClick={() => setPrice([100, 200])}>$100 - 200</li>
                  <li onClick={() => setPrice([300, 400])}>$300 - 400</li>
                  <li onClick={() => setPrice([500, "More"])}>$500 - More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mentors-grid">
        {mentors.map((mentor) => {
          return <MentorCard mentor={mentor} />;
        })}
      </div>
    </>
  );
};

export default FilterHeader;

//   {console.log(
//   Object.keys(data.categories).filter((category) => {
//     if (cat === "Category") {
//       return data.categories[category][skills];
//     } else {
//       return data.categories[category].Name === category;
//     }
//   })
// )}
