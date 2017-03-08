import { Slide } from 'spectacle';

class FullWidthSlide extends Slide {

  allStyles() {
    const { align } = this.props;

    const styles = {
      outer: {
        position: this.props.export ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: this.context.styles.global.body.background ?
          this.context.styles.global.body.background : "",
        ...this.props.style
      },
      inner: {
        display: "flex",
        position: "relative",
        flex: 1,
        alignItems: align ? align.split(" ")[1] : "center",
        justifyContent: align ? align.split(" ")[0] : "center"
      },
      content: {
        flex: 1,
        maxHeight: this.props.maxHeight || "100%",
        maxWidth: this.props.maxWidth || "100%",
        padding: 0,
      }
    };

    return { styles, ...super.allStyles().overViewStyles, ...super.allStyles().printStyles };
  }

}

export default FullWidthSlide;
