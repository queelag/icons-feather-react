import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShieldOffElement } from '@aracna/icons-feather-web/elements/shield-off-element'

export const IconFeatherShieldOff: ElementComponent<IconFeatherShieldOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShieldOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shield-off', IconFeatherShieldOffElement)
