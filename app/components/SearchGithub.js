var React = require('react');

var SearchGithub = React.createClass({

  render: function(){
    return (
      <div className="col-sm-12">
        <form>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchGithub;
