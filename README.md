# DLG exercise
Simple back-end API

## Running the application
Make sure you are in the directory /DLG-exercise/API to run all commands

### 1) Installing dependencies
To install all dependencies:
```
npm install
```

### 2) Configure .env
You can create a .env file following the .env.example file
or copy the .env.example in the .env:

- Linux
```
cp .env.example .env
```

- Windows
```
copy .env.example .env
```

The .env configure the application port environment variable.
The default port is 3000.

### 3) Run the application
To run the application locally:
```
npm start
```

## Running automated tests
To run all tests:
```
npm run test
```
To run only the removeDuplicate route tests:
```
npm run test removeDuplicate
```
To run only the changeVowals route tests:
```
npm run test changeVowals
```
