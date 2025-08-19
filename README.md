# Product List

## Installation and execution instructions

To run the project locally, follow the steps below:

1. Clone the repository.
2. Run the `npm install` command.
3. Run the `npm dev` command to run the project.
4. Open the browser and navigate to **localhost:5173**

## Project structure explanation

The project has been structured using the Atomic Design architecture. This organizes the components into separate folders i.e. Atoms, Molecules, and Organisms.

**Atoms**:

- All button components are inside the dedicated [atoms/buttons folder](/src/shared/components/atoms/buttons).
- All input elements can be place inside the dedicated [atoms/inputs folder](/src/shared/components/atoms/inputs).
- The atoms folder also contains other single-use items such as [ErrorMessage](/src/shared/components/atoms/ErrorMessage.tsx) and [Label](/src/shared/components/atoms/Label.tsx).

**Molecules**:

- The molecules folder contains components that combine individual components from the [Atoms folder](/src/shared/components/atoms).
- For example, the [InputField](/src/shared/components/molecules/InputField.tsx) component combines **Input**, **Label**, and **ErrorMessage**.
- The molecules folder also contains the ProductCard and ProductSkeleton components that are used to display the products and show the loading skeleton.

**Organisms**:

- The [Organisms folder](/src/shared/components/organisms/) contains combinations of molecules including the Navbar and footer used in the main layout.
- The **ProductGrid** component renders the **ProductCard** components after fetching the data from an API request allowing for a loading animation skeleton to show while pending.
- This folder also contains the **Chat** component.

## Implementation assumptions and decisions

1. The [Login page](/src/pages/Login.tsx) makes good use of the aforementioned components, taking advantage of the props and atomic architecture. This makes use of the **InputField** and **PasswordField** components to allow for toggling the password input field. I've also made use of a JavaScript setTimeout function to simulate an API request/login attempt. This will then navigate the user to the main page. Error handling has been implemented to ensure that the user sees the relevant message close to the respective input. There is also a `handleChange` function that makes it easy to update the input fields without code repetition. **You can login using dummy data, the application doesn't communicate with a server**.
2. All icons that are reused throughout the project have been exported from the [ICON_SRC_MAPPING constant variable](/src/shared/constants/iconSrcMapping.ts).
3. A new constant variable named [colors](/src/shared/constants/colors.ts) has been created which represents the available product colors.
4. Responsive design is implemented by taking advantage of the mobile-first approach provided by Tailwind CSS. This allows components to react to various screen sizes seamlessly. For example, the [ProductGrid component](/src/shared/components/organisms/ProductGrid.tsx).
5. The [Navbar component](/src/shared/components/organisms/Navbar.tsx) which is embedded on all pages that use the [main layout](/src/shared/layouts/MainLayout.tsx) is responsive, allowing the user to expand it and seamlessly navigate the website on smaller screens. I've use responsive design to ensure that it is absolutely positioned on mobile devices and relatively positioned on larger screens.
6. I've configured a [NotFound404 component](/src/pages/NotFound404.tsx) that redirects the application for all non-existent routes.

## Justification for optional libraries used

1. **React Toastify**: I've used `react-toastify` because it is more user friendly and provides a better user experience compared to regular JavaScript alerts.
2. **@Font Source Pretendard**: Using the `@fontsource/pretendard`is the recommended and most convenient method of installing pretendard. This allows me to apply the font family to the body element inside **index.css**
