/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        rectangle: "url('https://s3-alpha-sig.figma.com/img/4ee0/0006/3107c45a2adce01efe60a8d70e6ea4b2?Expires=1686528000&Signature=fKFWzA9lTvSQzhvVmEF-uTw9uCglvVRZgUNymHPaNERX9~UZQ5cfrjRrSf7pl2DoLnEK-aRY9rqyq1oYrJoEA4TKp~NVP4c~-1DONZUrBu8-z8-3A0qIq~Hn460Ooz7ibOdx8WMRKkogTEqLzF3guGna7WCm36~szrOwqLci07zeY2O6oiA6s1JRLI3ymy6Sb52puEed7z0tK-mjnSOgqHgO8hiPoigkaV3eTdRZRAvsV4nF68WWTb5F7kt8OF2QveG2HCfP4-rtIZK3-REMwP6cMXvEbwWv-P0-h89iX5W~O-rCBoUPrQY2JZ5mxaavZm7oxO-jr1TbortdXcDfjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
      fontFamily: {
        inter: "'Inter var',serif",
        poppins:"'Poppins',serif"
      },
      boxShadow: {
        customShadow : '-2px 12px 19px -3px rgb(0 0 0 / 67%)'
      }
    },
  },
  plugins: [],
}

