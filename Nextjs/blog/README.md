Hosting to Vercel
Vercel is the official hosting platform for Next.js. It enables you to ship your project from development to production without having a dedicated server or a domain name.

To host our project to Vercel, we will follow the following steps:

First, make sure you push this project to a GitHub repository.

Proceed to https://vercel.com. If you don’t have an account, just hit the signup link. If you already have an account, just log in to your account.

From your dashboard, hit New Project.

Make sure your GitHub account is selected as the provider on the resulting screen, then search for the project you just committed to GitHub and click the import button.

Skip the Create team section.

In the Configure project section, change the Project name to your preference, and then in the Environment Variables section enter the following:

```
MONGODB_URI = <your_mongodb_uri_string>
DB_NAME = sample_posts
PROD_URL = https://<your_project_name>.vercel.app
```

Copy the MONGODB_URI value from the .env.local file and paste it here.

Also, ensure you replace your Project name from above with the PROD_URL variable.

Hit the Deploy button.
