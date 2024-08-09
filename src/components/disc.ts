import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDiscElement } from '@aracna/icons-feather-web/elements/disc-element'

export const IconFeatherDisc: ElementComponent<IconFeatherDiscElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDiscElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-disc', IconFeatherDiscElement)
