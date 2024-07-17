import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  currentUser: FirebaseAuthTypes.User | null;
  userName: string | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(
    null
  );
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDoc = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        if (userDoc.exists) {
          setUserName(userDoc.data()?.name || null);
        } else {
          setUserName(null);
        }
      } else {
        setUserName(null);
      }
      setLoading(false);
    });

    return subscriber; // Unsubscribe on unmount
  }, []);

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
        setUserName(null);
      });
  };

  return (
    <AuthContext.Provider value={{ currentUser, userName, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
