# Nextjs - Setup with TypeScript <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" height="25px">

### Hi, I'm so glad you're here!!

## Features

- [`Nextjs v13`](https://nextjs.org/) + [`TypeScript`](https://www.typescriptlang.org/docs/handbook/intro.html)
- [`Redux Saga`](https://redux-saga.js.org/)
- [`ESLint`](https://eslint.org/) + [`Prettier`](https://prettier.io/) + [`Stylelint`](https://stylelint.io/)
- [`SCSS`](https://sass-lang.com/documentation/)
- [`Next-SEO v6`](https://www.npmjs.com/package/next-seo)
- [`Husky`](https://github.com/typicode/husky) + [`Lint-staged`](https://github.com/okonet/lint-staged)

## Files/Directories

| Path                 | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| /.husky              | settings for `Husky`                                                |
| /.vscode/            | settings for `Visual Studio Code` workspace                         |
| /public/             | root folder that gets served up as our next app.                    |
| /.eslintrc           | settings for `ESLint`                                               |
| /.prettierrc         | settings for `Prettier`                                             |
| /tsconfig.json       | settings for `TypeScript`                                           |
| /lint-staged...      | config testing and building before committing                       |
| /src                 |                                                                     |
| \_\_\_\_/common/     | contains logic code that can be reused in other components          |
| \_\_\_\_/components/ | contains Atomic Design components                                   |
| \_\_\_\_/constants/  | contains Router (API ,...)                                          |
| \_\_\_\_/container/  | contains Logic handler                                              |
| \_\_\_\_/interfaces/ | contains interfaces in TypeScript                                   |
| \_\_\_\_/lang/       | contains multi language                                             |
| \_\_\_\_/layouts/    | contains UI Design Header , Footer, Menu,...                        |
| \_\_\_\_/pages/      | contains handle router - pages                                      |
| \_\_\_\_/public/     | contains images, icons, fonts, dummyData                            |
| \_\_\_\_/services/   | contains shared services                                            |
| \_\_\_\_/store/      | contains shared store (Redux, Recoil,...)                           |
| \_\_\_\_/styles/     | contains styles: breakpoints, colors, font, mixin, function, global |
| \_\_\_\_/utils/      | contains functions, config, ...others                               |



Trans VI

| Path                 | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| /.husky              | Cài đặt cho `Husky`                                                 |
| /.vscode/            | Cài đặt cho `Visual Studio Code` workspace                          |
| /public/             | Nơi để chứa các thư mục gốc để phát triển các lần tiếp theo.        |
| /.eslintrc           | Cài đặt cho `ESLint`                                                |
| /.prettierrc         | Cài đặt cho `Prettier`                                              |
| /tsconfig.json       | Cài đặt cho `TypeScript`                                            |
| /lint-staged...      | kiểm tra cấu hình và xây dựng trước khi commit code                 |
| /src                 |                                                                     |
| \_\_\_\_/common/     | Tái sử dụng code như button , loading, input ,...                   |
| \_\_\_\_/components/ | Là các thành phần nhỏ, có thể tái sử dụng được                      |
| \_\_\_\_/constants/  | Chứa các thư mục không thể thay đổi ( API , URL , Config package)   |
| \_\_\_\_/container/  | Chứa các components bên trong, dùng để call API, Redux,...          |
| \_\_\_\_/interfaces/ | Dùng để mô tả đối tượng trong TypeScript                            |
| \_\_\_\_/lang/       | Xử dụng nhiều ngôn ngữ                                              |
| \_\_\_\_/layouts/    | Lưu trữ các bố cục , giao diện như header , footer                  |
| \_\_\_\_/pages/      | Chịu trách nhiệm nội dung web , và chứa URL                         |
| \_\_\_\_/public/     | Chứa hình ảnh , icon , font chữ,...                                 |
| \_\_\_\_/services/   | Chịu trách nhiệm call API xuống BE                                  |
| \_\_\_\_/store/      | Chứa store của redux                                                |
| \_\_\_\_/styles/     | Chứa CSS , SCSS ( zậy cho nhanh )                                   |
| \_\_\_\_/utils/      | Chứa các config như API , ngôn ngữ , ...                            |


Note

| Path                 | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| prettierrc.json      | định dạng mã nguồn                                                  |
| tsconfig.json        | tệp cấu hình TypeScript                                             |
| next.config          | Cấu hình nextjs                                                     |
| /.eslintrc           | Cài đặt cho `ESLint`                                                |
| /.prettierrc         | Cài đặt cho `Prettier`                                              |
| /tsconfig.json       | Cài đặt cho `TypeScript`                                            |
| /lint-staged...      | kiểm tra cấu hình và xây dựng trước khi commit code                 |
| /src                 |                                                                     |
| \_\_\_\_/common/     | Tái sử dụng code như button , loading, input ,...                   |
| \_\_\_\_/components/ | Là các thành phần nhỏ, có thể tái sử dụng được                      |
| \_\_\_\_/constants/  | Chứa các thư mục không thể thay đổi ( API , URL , Config package)   |
| \_\_\_\_/container/  | Chứa các components bên trong, dùng để call API, Redux,...          |
| \_\_\_\_/interfaces/ | Dùng để mô tả đối tượng trong TypeScript                            |
| \_\_\_\_/lang/       | Xử dụng nhiều ngôn ngữ                                              |
| \_\_\_\_/layouts/    | Lưu trữ các bố cục , giao diện như header , footer                  |
| \_\_\_\_/pages/      | Chịu trách nhiệm nội dung web , và chứa URL                         |
| \_\_\_\_/public/     | Chứa hình ảnh , icon , font chữ,...                                 |
| \_\_\_\_/services/   | Chịu trách nhiệm call API xuống BE                                  |
| \_\_\_\_/store/      | Chứa store của redux                                                |
| \_\_\_\_/styles/     | Chứa CSS , SCSS ( zậy cho nhanh )                                   |
| \_\_\_\_/utils/      | Chứa các config như API , ngôn ngữ , ...                            |

### Requirements

- NodeJS v18.17.0 or later
- NPM version 10.2.4

## Command Line

| Path                  | Purpose                 |
| --------------------  | ----------------------- |
| npm run dev           | start the project       |
| npm run build         | build the project       |
| gen:component         | generate new component  |
| gen:page              | generate new page       |
| npm run lint          | run to check the syntax |
| npm run lint --fix      | run to fix the syntax |
| npm run lint:style    | run to format code scss |
| npm run prettier      | run to format code      |
| npm run check-types   | run check code          |

---

## Extension

- vscode-eslint <img src="https://images.credly.com/images/e6eebd0c-6a17-4c06-b172-02ca9f6beb06/eslint.png" width="25px" height="25px">
- prettier-vscode <img src="https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png" width="25px" height="25px">
- sonarlint-vscode <img src="https://www.sonarlint.org/sonarlint-og-image.png" width="25px" height="25px">
- vscode-stylelint <img src="https://pic.vsixhub.com/3c/a8/ec35b5a3-9802-4c68-b5ff-e85f19ec0977-logo.png" width="25px" height="25px">

---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `Single_Underscore(_) && Single-Dash(-)` format for `className`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_title'>Title</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a--sample'>
    <span className='a--sample__title'>Title</span>
  </div>
);
```

**Note: The `className` must be formatted as `block_element-modifier`. But `Sometimes` it will be formatted as `block_element_element-modifier`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element'>One Element</span>
  </div>
);

export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2'>Two elements</span>
  </div>
);

export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2-primary'>Two elements</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2_element3'>Greater than 2 elements</span>
  </div>
);
```

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
//GOOD 🏆🏆🏆
export const Component = () => <div>Without children...</div>;

export const Component: React.FC = ({ children }) => <div>{children}</div>;

//NOT GOOD 💩💩💩
export const Component: React.FC = () => <div>Without children...</div>;
```

**Note: Clearly define the data type of the property.**

```tsx
//GOOD 🏆🏆🏆
interface Props {
  title: string;
}

//NOT GOOD 💩💩💩
interface Props {
  title: any;
}
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
export const Component = () => {
  // TODO: bla...bla...bla
  const Problems = "Problems";

  return <div>Todo Something...</div>;
};
```

**Note: Use the filename as the component name. For example, Example.tsx should have a reference name of Example. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:**

```tsx
//GOOD 🏆🏆🏆
import Example from "components/atoms/Example";

//NOT GOOD 💩💩💩
import Example from "components/atoms/Example/index";
```
# Blog-Redux-Saga-Axios-Paginate


## Update package.json
=> Go to package.json file, convert all versions to "*" ,

Before:
```
    "dependencies": {
    "express": "~3.2.0",
    "mongodb": "~1.2.14",
    "underscore": "~1.4.4",
    "rjs": "~2.10.0",
    "jade": "~0.29.0",
    "async": "~0.2.7"
  }
```

After:
```
  "dependencies": {
    "express": "*",
    "mongodb": "*",
    "underscore": "*",
    "rjs": "*",
    "jade": "*",
    "async": "*"
  }
```

Then run the command "npm update --save"