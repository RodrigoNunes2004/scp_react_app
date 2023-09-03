import scp_data from './data.json';
import SCP from './SCP';


function App() {
  return (
    <div className="container"> {/* Applying Bootstrap container class */}
      {scp_data.map(scp => (
        <div className="row"> {/* Bootstrap row class */}
          <div className="col-md-6">
            <SCP scp={scp} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
