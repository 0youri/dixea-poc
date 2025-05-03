import type { Schema, Struct } from '@strapi/strapi';

export interface PiecePiece extends Struct.ComponentSchema {
  collectionName: 'components_piece_pieces';
  info: {
    description: '';
    displayName: 'piece';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'piece.piece': PiecePiece;
    }
  }
}
