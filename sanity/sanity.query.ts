// sanity/sanity.query.ts

import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}



export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
      "coverImage": coverImage.asset->url,
      "coverImageAlt": coverImage.alt,
      "images": images[].asset->url,
      projectUrl,
      githubUrl,
      description,
      projectType,
      technologies
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      githubUrl,
      coverImage { alt, "image": asset->url },
      images[] { alt, "image": asset->url },
      tagline,
      description,
      projectType,
      technologies
    }`,
    { slug }
  );
}


export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"]{
      _id,
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      location,
      description,
      url,
      "logo": logo.asset->url,
      

    }`
  );
}