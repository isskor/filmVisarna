function DetailPage() {
  return (
    <div>
      <div className="trailer"></div>
      <div className="info">
        <div className="cover"></div>
        <div className="mainInfo">
          <div className="title"> Title {movie.title} </div>

          <div className="grayText"> Directors </div>
          <div className="director"> Director</div>

          <div className="grayText"> Cast </div>
          <div className="whiteText">
            {" "}
            Castmember, Castmember, Castmember, Castmember, Castmember,
            Castmember, Castmember, Castmember, Castmember, Castmember,
          </div>

          <div className="grayText"> Plot </div>
          <div className="whiteText">
            {" "}
            loremloremloremloremloremloremloremloremlorem loremlorem
            loremloremlorem loremloremlorem loremloremloremlorem lorem
            loremloremlorem loremlorem lorem lorem lorem lorem loremlorem
            loremloremloremloremloremloremloremloremlorem loremlorem
            loremloremlorem loremloremlorem loremloremloremlorem lorem
            loremloremloremloremloremloremloremloremlorem loremlorem
            loremloremlorem loremloremlorem loremloremloremlorem lorem
            loremloremlorem loremlorem lorem lorem lorem lorem loremlorem
          </div>
        </div>
        <div className="sideInfo">
          <div className="grayText"> Release Date </div>
          <div className="whiteText">Release Date</div>

          <div className="whiteText">Genre</div>

          <div className="whiteText">Tags</div>

          <div className="whiteText">Length</div>

          <div className="whiteText">Language</div>
        </div>
      </div>
      <div className="booking">
        <div className="showTimes"> Show times </div>
      </div>
    </div>
  );
}
export default DetailPage;
