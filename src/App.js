import React, { Component } from 'react';
import classes from  './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureOptionClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('Next state = ', nextState);
    //console.log('Current state = ', this.state);

    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature = {this.state.currentSelectedFeature} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data = {this.state.productData} onColorOptionClick = {this.onColorOptionClick} currentPreviewImagePos = {this.state.currentPreviewImagePos} onFeatureOptionClick = {this.onFeatureOptionClick} currentSelectedFeature = {this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>
    );
    }
}

export default App;
