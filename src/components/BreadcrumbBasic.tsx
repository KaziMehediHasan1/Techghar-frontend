import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BreadcrumbBasicProps = {
  text: string[];
  link?: string;
};

export function BreadcrumbBasic({ text, link }: BreadcrumbBasicProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {text?.map((item, index) => (
          <BreadcrumbItem key={index} className='text-sm'>
            <BreadcrumbLink className='text-sm' href={link || '/'}>{item}</BreadcrumbLink>
            {index < text.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
