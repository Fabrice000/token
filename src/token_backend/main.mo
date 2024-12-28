import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token {
  Debug.print("Token");
  var owner : Principal = Principal.fromText("coupe-k5uja-it7mr-gkjx6-4fadz-26tkn-lt7j2-sujcc-kc7qt-a6enq-uae");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "D4rk";
  private stable var balanceEntries : [(Principal, Nat)] = [];

  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  if (balances.size() < 1) {
    balances.put(owner, totalSupply);

  };
  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };
  public query func getSymbol() : async Text {
    return symbol;
  };
  public shared (msg) func payOut() : async Text {
    // Debug.print(debug_show (msg.caller));
    if (balances.get(msg.caller) == null) {

      let amount = 10000;
      // balances.put(msg.caller, amount);
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "Already Claimed";
    };
  };
  public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amount) {
      let newFromBalance : Nat = fromBalance - amount;
      let toBalance : Nat = await balanceOf(to);
      let newToBalance = toBalance + amount;

      balances.put(msg.caller, newFromBalance);
      balances.put(to, newToBalance);

      return "Success"

    } else {
      return "Insufficient funds"

    };
  };

  system func preupgrade() {
    balanceEntries := Iter.toArray(balances.entries());
  };

  system func postupgrade() {
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
      balances.put(owner, totalSupply);

    };
  };
};
