import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDiscElement } from '@aracna/icons-feather-web/elements/disc-element'

export const IconFeatherDisc: ElementComponent<IconFeatherDiscElement, IconProps> = createBaseElementComponent<
  IconFeatherDiscElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-disc', IconFeatherDiscElement)
