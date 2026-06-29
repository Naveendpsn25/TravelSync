import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePackagesPage from "./pages/ExplorePackagesPage/ExplorePackagesPage";
import PackageDetailsPage from "./pages/PackageDetailsPage/PackageDetailsPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage/BookingConfirmationPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MyBookingsPage from "./pages/MyBookingsPage/MyBookingsPage";
import Navbar from "./components/layout/Navbar/Navbar";
import AppLayout from "./components/layout/AppLayout/AppLayout";




function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<ExplorePackagesPage />} />
          <Route path="/packages/:id" element={<PackageDetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/booking/:packageId" element={<BookingPage />} />
          <Route
            path="/booking-confirmation/:bookingId"
            element={<BookingConfirmationPage />}
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />}/>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;