import { IResourceComponentsProps } from "@refinedev/core";
import { AntdListInferencer } from "@refinedev/inferencer/antd";

export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
  return (
    <AntdListInferencer
      fieldTransformer={(field: any) => {
        if (["$permissions", "$updatedAt"].includes(field.key)) {
          return false;
        }

        if (field.key === "$createdAt") {
          field.key = "created_at";
          field.title = "Created At";
        }

        return field;
      }}
    />
  );
};
