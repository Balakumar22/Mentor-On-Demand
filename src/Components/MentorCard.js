import "../Styles/mentorCard.css";

const ratingComponent = (rating) => {
  let rate = [];
  let round = (rating * 10) % 10;
  let limit = round > 5 ? Math.round(rating) : Math.floor(rating);
  let half = round === 5 ? 1 : 0;

  for (let i = 0; i < (limit < 0 ? 0 : limit); i++) {
    rate.push(<ion-icon name="star" class="md hydrated icon"></ion-icon>);
  }

  if (half === 1) {
    rate.push(<ion-icon name="star-half" class="md hydrated icon"></ion-icon>);
  }

  for (let i = 0; i < rating - limit - half; i++) {
    rate.push(
      <ion-icon name="star-outline" class="md hydrated icon"></ion-icon>
    );
  }

  return rate;
};

const MentorCard = ({ mentor }) => {
  const {
    spotsLeft,
    name,
    imageUrl,
    tag = "",
    country,
    rating,
    reviewCount = 0,
    occupation,
    company,
    chat,
    call,
    callCount,
    task,
    handsOn,
    description = "",
    skills = [],
    price,
  } = mentor;

  return (
    <div className="mentor-card">
      <span className="spots-left">Only {spotsLeft} Spots Left</span>
      <div className="mentor-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="mentor-details">
        <div className="mentor-details-header">
          <div className="mentor-name-tag">
            <div className="mentor-name-country">
              <h1 className="mentor-name">{name}</h1>
              <span className="country">{country}</span>
            </div>
            {tag !== "" && (
              <p className="mentor-tag">
                <span>
                  <ion-icon name="star" class="md hydrated icon"></ion-icon>
                </span>
                <span>{tag} Mentor</span>
              </p>
            )}
          </div>
          <div className="mentor-occupation">
            {occupation} at <span className="mentor-company">{company}</span>
          </div>
          {reviewCount > 0 && (
            <div className="mentor-review">
              <div className="ratings">
                {ratingComponent(rating).map((r) => {
                  return r;
                })}
              </div>
              <span className="review-count">({reviewCount} reviews)</span>
            </div>
          )}
        </div>
        <div className="mentor-services">
          {chat && (
            <div className="service-item">
              <ion-icon name="chatboxes" class="md hydrated icon"></ion-icon>
              <span className="service-name">Chat</span>
            </div>
          )}
          {call && (
            <div className="service-item">
              <ion-icon name="call" class="md hydrated icon"></ion-icon>
              <span className="service-name">
                {typeof callCount === "number"
                  ? callCount + " x "
                  : callCount + " "}
                Call
              </span>
            </div>
          )}
          {task && (
            <div className="service-item">
              <ion-icon
                name="checkmark-circle-outline"
                class="md hydrated icon"
              ></ion-icon>
              <span className="service-name">Task</span>
            </div>
          )}
          {handsOn && (
            <div className="service-item">
              <ion-icon name="briefcase" class="md hydrated icon"></ion-icon>
              <span className="service-name">HandsOn</span>
            </div>
          )}
        </div>
        <div className="mentor-description">
          {description.substring(0, 500)}...
        </div>
        <div className="mentor-skill-sets">
          {skills.map((skill) => {
            return <span className="mentor-skill">{skill}</span>;
          })}
        </div>
      </div>
      <div className="mentorship-details">
        <div className="mentorship-details-header">
          <p className="free-trail">
            <ion-icon name="trophy" class="md hydrated icon"></ion-icon>{" "}
            <span>7 Day Free Trial</span>
          </p>
        </div>

        <p className="mentorship-expectation">
          What can I expect from this mentor?
        </p>
        <div className="feature-item">
          <ion-icon name="school" class="md hydrated icon"></ion-icon>
          <p className="tag-line">
            One of our {tag.toLowerCase()} mentor,{tag.toLowerCase()} services &
            fast responses
          </p>
        </div>
        <div className="feature-item">
          <div className="icon-container">
            <ion-icon name="chatboxes" class="md hydrated icon"></ion-icon>
            <ion-icon name="mail" class="md hydrated icon"></ion-icon>
            <ion-icon name="text" class="md hydrated icon"></ion-icon>
          </div>
          <p className="tag-line">
            One of our {tag.toLowerCase()} mentor,{tag.toLowerCase()} services &
            fast responses
          </p>
        </div>
        <div className="feature-item">
          <ion-icon name="call" class="md hydrated icon"></ion-icon>
          <p className="tag-line">
            {typeof callCount === "number"
              ? `Up to ${callCount} ${
                  callCount > 1 ? "calls" : "call"
                } per month`
              : `Regular 1-on-1 calls, per agreement with mentor`}
          </p>
        </div>
      </div>
      <div className="price">
        ${price}
        <span>/month</span>
      </div>
      <div className="view-profile">
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default MentorCard;
