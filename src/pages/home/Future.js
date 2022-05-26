import React from "react";
import ellipse from "../../images/ellipse.png";
import saturn from "../../images/saturn.png";
import globe from "../../images/globe.png";
import ellipse2 from "../../images/ellipse-2.png";

const Future = () => {
  return (
    <>
<div className="system">
	<div className="system__orbit system__orbit--sun">
		<img src={ellipse} alt="Sun" className="system__icon system__icon--sun ecosystem-img"/>
	</div>
	

	<div className="system__orbit system__orbit--earth">
		<div className="system__planet system__planet--earth">
			<img src={saturn} alt="Earth"/>
		</div>
	</div>

	<div className="system__orbit system__orbit--saturn">
		<div className="system__planet system__planet--saturn">
			<img src={globe} alt="Saturn"/>
		</div>
	</div>

	<div className="system__orbit system__orbit--pluto">
		<div className="system__planet system__planet--pluto">
			<img src={ellipse2} alt="Pluto"/>
		</div>
	</div>
</div>
    </>
  );
};

export default Future;
