//       {/* <!-- Numbers --> */}
//       <div class="number">
//         <span class="number__title">Just 17</span>
//         <span class="number__value">17</span>
//       </div>
//     </div>
//   );
// };
import React from 'react';

class Numbers extends React.Component {
  render() {
    return (
      <div className="number">
        <span className="number__title">
					{this.props.title}
				</span>
        <span className="number__value">
				{this.props.number}
				</span>
      </div>
    );
  }
}

export default Numbers;
