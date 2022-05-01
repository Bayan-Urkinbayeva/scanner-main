import React from "react";
import QrReader from "react-qr-scanner";

class QRScan extends React.Component {
  state = {
    delay: 100,
    result: "No result"
  };

  handleScan = (data) => {
    this.setState({
      result: data
    });
    console.log("scanned");
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <QrReader
          delay={this.state.delay}
          //style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
        
      </div>
    );
  }
}

export default QRScan;
