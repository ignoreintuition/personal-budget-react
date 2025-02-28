import ChartComponent from "../Chart/Chart";
import D3Component from "../D3Component/D3";

function HomePage() {
  return (
    <div
      className="container center"
      itemscope
      itemtype="https://schema.org/SoftwareApplication"
    >
      <div id="main-content" className="page-area">
        <article className="text-box">
          <h3>Stay on track</h3>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </article>

        <article className="text-box">
          <h3>Alerts</h3>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </article>

        <article className="text-box">
          <h3>Results</h3>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </article>

        <article className="text-box">
          <h3>Free</h3>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </article>

        <article className="text-box">
          <h3>Stay on track</h3>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </article>

        <article className="text-box">
          <h3>Alerts</h3>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </article>

        <article className="text-box">
          <h3>Results</h3>
          <D3Component></D3Component>
        </article>

        <article className="text-box">
          <h3>Free</h3>
          <ChartComponent> </ChartComponent>
        </article>
      </div>
    </div>
  );
}

export default HomePage;
