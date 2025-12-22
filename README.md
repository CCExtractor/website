# CCExtractor Website

This repository contains the source code for the **CCExtractor** website. It is built using **Hugo** (Extended Version).<br>

It is being built automatically using [Hugo](https://gohugo.io/) with [Netlify's continuous deployment](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/).

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1️⃣ Install Dependencies

Ensure you have the following installed:

#### 🔹 **Install Go (Golang)**

Download and install Go from the official site:  
[🔗 Download Go](https://go.dev/dl/)

#### 🔹 **Install  [Hugo](https://gohugo.io/) Extended Version**

##### **Windows (Using Chocolatey)**

```bash
choco install hugo-extended -y
```

##### **Linux (Debian/Ubuntu)**

```bash
sudo apt-get install hugo
```

##### **MacOS (Using Homebrew)**

```bash
brew install hugo
```

##### To verify the installation, run:

```bash
hugo version
```

##### Ensure the output includes extended, e.g.:

```bash
hugo v0.143.1+extended windows/amd64 ...
```

## 🌎 Theme Setup

The website uses the **Compose** theme, which can be set up in two ways:

### 🔹 Option 1: Default Setup (No Theme Modifications)

By default, the theme is included as a **Hugo module**, as seen in `config.toml`:

```toml
theme = ["github.com/Techno-Disaster/compose"]
```

##### If you're not modifying the theme, update dependencies:

```bash
hugo mod get -u
hugo mod tidy
```

## 🔹 Option 2: Customizing the Theme Locally

If you need to make changes to the theme, use a local version instead of the module.

### 1️⃣ Clone the theme manually into the `themes/compose` directory:

```bash
git clone https://github.com/onweru/compose.git themes/compose
```

### 2️⃣ Modify `config.toml` to use the local theme:

```bash
# Comment out the Hugo module theme
# theme = ["github.com/Techno-Disaster/compose"]

# Use the local theme
theme = "compose"
```

## 🏗️ Build and Run

Once the theme setup is complete, build and run the website locally:

### 1️⃣ Run the following command to clean up the site:

```bash
hugo --gc
```

### 2️⃣ Serve the site locally:

```bash
hugo serve
```

Now, open [http://localhost:1313/](http://localhost:1313/) in your browser to view the site. 🚀

## 📜 License

This project is licensed under the **Apache-2.0 License**. See the [LICENSE](LICENSE) file for details.