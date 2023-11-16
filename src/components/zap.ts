import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherZapElement } from '@aracna/icons-feather-web/elements/zap-element'

export const IconFeatherZap: ElementComponent<IconFeatherZapElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherZapElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-zap', IconFeatherZapElement)
