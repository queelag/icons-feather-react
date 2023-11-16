import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZapOffElement } from '@aracna/icons-feather-web/elements/zap-off-element'

export const IconFeatherZapOff: ElementComponent<IconFeatherZapOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZapOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zap-off', IconFeatherZapOffElement)
