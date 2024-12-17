
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-light min-vh-100">
        <Header />
        <div className="container py-4">
          <div className="text-center mb-4">
            <Balance />
          </div>
          <IncomeExpenses />
          <div className="row mt-4">
            <div className="col-lg-6">
              <TransactionList />
            </div>
            <div className="col-lg-6">
              <AddTransaction />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
