// Minimal consumer fixture for release validation.
// This file intentionally imports every public canonical family entrypoint.
import React from 'react';
import {
  ReactionThumbsUp,
  ReactionHeart,
  ReactionLaughing,
  ReactionWow,
  ReactionSad,
} from './reactions';
import { CommunicationIcon } from './communication';
import { PlaceIcon } from './places';
import { IdentityIcon } from './identity';
import { CommerceIcon } from './commerce';
import { FinanceIcon } from './finance';
import { CultureIcon } from './culture';
import { StateIcon } from './state';

export function ItundaFaceConsumerFixture() {
  return (
    <div aria-label="ItundaFace consumer fixture">
      <ReactionThumbsUp size={14} />
      <ReactionHeart size={16} />
      <ReactionLaughing size={18} />
      <ReactionWow size={20} />
      <ReactionSad size={24} />
      <CommunicationIcon kind="chat" size={24} />
      <PlaceIcon kind="market" size={24} />
      <IdentityIcon kind="verified" size={24} />
      <CommerceIcon kind="gift" size={24} />
      <FinanceIcon kind="wallet" size={24} />
      <CultureIcon kind="celebration" size={24} />
      <StateIcon kind="success" size={24} />
    </div>
  );
}
