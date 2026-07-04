import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/PageParts";
import { findServicePage, servicePages } from "@/lib/site-data";

export function generateStaticParams() {
  return servicePages.flatMap((page) => [
    { slug: page.slug },
    { slug: page.legacyPath },
  ]);
}

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailPage service={service} />
    </main>
  );
}
