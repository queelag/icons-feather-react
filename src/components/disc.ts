import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDiscElement } from '@aracna/icons-feather-web/elements/disc-element'

export const IconFeatherDisc: ElementComponent<IconFeatherDiscElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDiscElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-disc', IconFeatherDiscElement)
