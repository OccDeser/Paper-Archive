# Asiacrypt[2021-3]
## Lunar: A Toolbox for More Efficient Universal and Updatable zkSNARKs and Commit-and-Prove Extensions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#lunar-a-toolbox-for-more-efficient-universal-and-updatable-zksnarks-and-commit-and-prove-extensions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#lunar-a-toolbox-for-more-efficient-universal-and-updatable-zksnarks-and-commit-and-prove-extensions)
### Authors
* Matteo Campanelli, Aarhus University, Aarhus, Denmark
* Antonio Faonio, EURECOM, Sophia Antipolis, France
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, IMDEA Software Institute, Madrid, Spain
* Hadrián Rodríguez, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, Universidad Politécnica de Madrid, Madrid, Spain
### Abstract
> We study how to construct zkSNARKs whose SRS is universal and updatable, i.e., valid for all relations within a size-bound and to which a dynamic set of participants can indefinitely add secret randomness. Our focus is: efficient universal updatable zkSNARKs with linear-size SRS and their commit-and-prove variants. We both introduce new formal frameworks and techniques, as well as systematize existing ones.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_1](https://doi.org/10.1007/978-3-030-92078-4_1)
## Gentry-Wichs is Tight: a Falsifiable Non-adaptively Sound SNARG.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#gentry-wichs-is-tight-a-falsifiable-non-adaptively-sound-snarg)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#gentry-wichs-is-tight-a-falsifiable-non-adaptively-sound-snarg)
### Authors
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Kateryna Pavlyk, Simula UiB, Bergen, Norway
### Abstract
> By the impossibility result of Gentry and Wichs, non-falsifiable assumptions are needed to construct (even non-zero-knowledge) adaptively sound succinct non-interactive arguments (SNARGs) for hard languages. It is important to understand whether this impossibility result is tight. While it is known how to construct adaptively sound non-succinct non-interactive arguments for \(\mathsf {NP}\) from falsifiable assumptions, adaptively sound SNARGs for \(\mathsf {NP}\) from non-falsifiable assumptions, and adaptively sound SNARGs for \(\mathsf {P}\) from falsifiable assumptions, there are no known non-adaptively sound SNARGs for \(\mathsf {NP}\) from falsifiable assumptions. We show that Gentry-Wichs is tight by constructing the latter. In addition, we prove it is non-adaptively knowledge-sound in the algebraic group model and Sub-ZK (i.e., zero-knowledge even if the CRS is subverted) under a non-falsifiable assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_2](https://doi.org/10.1007/978-3-030-92078-4_2)
## Proofs for Inner Pairing Products and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#proofs-for-inner-pairing-products-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#proofs-for-inner-pairing-products-and-applications)
### Authors
* Benedikt Bünz, Stanford University, Stanford, USA
* Mary Maller, Ethereum Foundation, Bern, Switzerland
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Nirvan Tyagi, Cornell University, Ithaca, USA
* Psi Vesely, UC San Diego, San Diego, USA
### Abstract
> We present a generalized inner product argument and demonstrate its applications to pairing-based languages. We apply our generalized argument to prove that an inner pairing product is correctly evaluated with respect to committed vectors of n source group elements. With a structured reference string (SRS), we achieve a logarithmic-time verifier whose work is dominated by \(6 \log n\) target group exponentiations. Proofs are of size \(6 \log n\) target group elements, computed using 6n pairings and 4n exponentiations in each source group.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_3](https://doi.org/10.1007/978-3-030-92078-4_3)
## Snarky Ceremonies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#snarky-ceremonies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#snarky-ceremonies)
### Authors
* Markulf Kohlweiss, IOHK, Edinburgh, UK
* Markulf Kohlweiss, The University of Edinburgh, Edinburgh, UK
* Mikhail Volkhov, The University of Edinburgh, Edinburgh, UK
* Mary Maller, Ethereum Foundation, London, UK
* Janno Siim, University of Tartu, Tartu, Estonia
### Abstract
> Succinct non-interactive arguments of knowledge (SNARKs) have found numerous applications in the blockchain setting and elsewhere. The most efficient SNARKs require a distributed ceremony protocol to generate public parameters, also known as a structured reference string (SRS). Our contributions are two-fold:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_4](https://doi.org/10.1007/978-3-030-92078-4_4)
## Efficient NIZKs for Algebraic Sets.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#efficient-nizks-for-algebraic-sets)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#efficient-nizks-for-algebraic-sets)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Roberto Parisella, Simula UiB, Bergen, Norway
* Arne Tobias Ødegaard, Simula UiB, Bergen, Norway
### Abstract
> Significantly extending the framework of (Couteau and Hartmann, Crypto 2020), we propose a general methodology to construct NIZKs for showing that an encrypted vector \(\boldsymbol{\chi }\) belongs to an algebraic set, i.e., is in the zero locus of an ideal \(\mathcal {I}\) of a polynomial ring. In the case where \(\mathcal {I}\) is principal, i.e., generated by a single polynomial F, we first construct a matrix that is a “quasideterminantal representation” of F and then a NIZK argument to show that \(F (\boldsymbol{\chi }) = 0\). This leads to compact NIZKs for general computational structures, such as polynomial-size algebraic branching programs. We extend the framework to the case where \(\mathcal {I}\) is non-principal, obtaining efficient NIZKs for R1CS, arithmetic constraint satisfaction systems, and thus for \(\mathsf {NP}\). As an independent result, we explicitly describe the corresponding language of ciphertexts as an algebraic language, with smaller parameters than in previous constructions that were based on the disjunction of algebraic languages. This results in an efficient GL-SPHF for algebraic branching programs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_5](https://doi.org/10.1007/978-3-030-92078-4_5)
## Bit Security as Computational Cost for Winning Games with High Probability.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#bit-security-as-computational-cost-for-winning-games-with-high-probability)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#bit-security-as-computational-cost-for-winning-games-with-high-probability)
### Authors
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
* Kenji Yasunaga, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> We introduce a novel framework for quantifying the bit security of security games. Our notion is defined with an operational meaning that a \(\lambda \)-bit secure game requires a total computational cost of \(2^\lambda \) for winning the game with high probability, e.g., 0.99. We define the bit security both for search-type and decision-type games. Since we identify that these two types of games should be structurally different, we treat them differently but define the bit security using the unified framework to guarantee the same operational interpretation. The key novelty of our notion of bit security is to employ two types of adversaries: inner adversary and outer adversary. While the inner adversary plays a “usual” security game, the outer adversary invokes the inner adversary many times to amplify the winning probability for the security game. We find from our framework that the bit security for decision games can be characterized by the information measure called the Rényi divergence of order 1/2 of the inner adversary. The conventional “advantage,” defined as the probability of winning the game, characterizes our bit security for search-type games. We present several security reductions in our framework for justifying our notion of bit security. Many of our results quantitatively match the results for the bit security notion proposed by Micciancio and Walter in 2018. In this sense, our bit security strengthens the previous notion of bit security by adding an operational meaning. A difference from their work is that, in our framework, the Goldreich-Levin theorem gives an optimal reduction only for “balanced” adversaries who output binary values in a balanced manner.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_6](https://doi.org/10.1007/978-3-030-92078-4_6)
## Giving an Adversary Guarantees (Or: How to Model Designated Verifier Signatures in a Composable Framework).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#giving-an-adversary-guarantees-or-how-to-model-designated-verifier-signatures-in-a-composable-framework)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#giving-an-adversary-guarantees-or-how-to-model-designated-verifier-signatures-in-a-composable-framework)
### Authors
* Ueli Maurer, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Christopher Portmann, Concordium, Zürich, Switzerland
### Abstract
> When defining a security notion, one typically specifies what dishonest parties cannot achieve. For example, communication is confidential if a third party cannot learn anything about the messages being transmitted, and it is authentic if a third party cannot impersonate the real (honest) sender. For certain applications, however, security crucially relies on giving dishonest parties certain capabilities. As an example, in Designated Verifier Signature (DVS) schemes, one captures that only the designated verifier can be convinced of the authenticity of a message by guaranteeing that any dishonest party can forge signatures which look indistinguishable (to a third party) from original ones created by the sender.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_7](https://doi.org/10.1007/978-3-030-92078-4_7)
## How to Build a Trapdoor Function from an Encryption Scheme.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#how-to-build-a-trapdoor-function-from-an-encryption-scheme)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#how-to-build-a-trapdoor-function-from-an-encryption-scheme)
### Authors
* Sanjam Garg, University of California, Berkeley, Berkeley, USA
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, USA
### Abstract
> In this work we ask the following question: Can we transform any encryption scheme into a trapdoor function (TDF)? Alternatively stated, can we make any encryption scheme randomness recoverable? We propose a generic compiler that takes as input any encryption scheme with pseudorandom ciphertexts and adds a trapdoor to invert the encryption, recovering also the random coins. This universal TDFier only assumes in addition the existence of a hinting pseudorandom generator (PRG). Despite the simplicity, our transformation is quite general and we establish a series of new feasibility results:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_8](https://doi.org/10.1007/978-3-030-92078-4_8)
## Beyond Software Watermarking: Traitor-Tracing for Pseudorandom Functions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#beyond-software-watermarking-traitor-tracing-for-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#beyond-software-watermarking-traitor-tracing-for-pseudorandom-functions)
### Authors
* Rishab Goyal, MIT, Cambridge, MA, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Software watermarking schemes allow a user to embed an identifier into a piece of code such that the resulting program is nearly functionally-equivalent to the original program, and yet, it is difficult to remove the identifier without destroying the functionality of the program. Such schemes are often considered for proving software ownership or for digital rights management. Existing constructions of watermarking have focused primarily on watermarking pseudorandom functions (PRFs).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_9](https://doi.org/10.1007/978-3-030-92078-4_9)
## Batching Base Oblivious Transfers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#batching-base-oblivious-transfers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#batching-base-oblivious-transfers)
### Authors
* Ian McQuoid, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### Abstract
> Protocols that make use of oblivious transfer (OT) rarely require just one instance. Usually, a batch of OTs is required—notably, when generating base OTs for OT extension. There is a natural way to optimize 2-round OT protocols when generating a batch, by reusing certain protocol messages across all instances. In this work we show that this batch optimization is error prone. We catalog many implementations and papers that have an incorrect treatment of this batch optimization, some of them leading to catastrophic leakage in OT extension protocols. We provide a full treatment of how to properly optimize recent 2-round OT protocols for the batch setting. Along the way we show several performance improvements to the OT protocol of McQuoid, Rosulek, and Roy (ACM CCS 2020). In particular, we show an extremely simple OT construction that may be of pedagogical interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_10](https://doi.org/10.1007/978-3-030-92078-4_10)
## Algebraic Adversaries in the Universal Composability Framework.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#algebraic-adversaries-in-the-universal-composability-framework)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#algebraic-adversaries-in-the-universal-composability-framework)
### Authors
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Jonathan Katz, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jiayu Xu, Algorand, Boston, USA
### Abstract
> The algebraic-group model (AGM), which lies between the generic group model and the standard model of computation, provides a means by which to analyze the security of cryptosystems against so-called algebraic adversaries. We formalize the AGM within the framework of universal composability, providing formal definitions for this setting and proving an appropriate composition theorem. This extends the applicability of the AGM to more-complex protocols, and lays the foundations for analyzing algebraic adversaries in a composable fashion. Our results also clarify the meaning of composing proofs in the AGM with other proofs and they highlight a natural form of independence between idealized groups that seems inherent to the AGM and has not been made formal before—these insights also apply to the composition of game-based proofs in the AGM. We show the utility of our model by proving several important protocols universally composable for algebraic adversaries, specifically: (1) the Chou-Orlandi protocol for oblivious transfer, and (2) the SPAKE2 and CPace protocols for password-based authenticated key exchange.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_11](https://doi.org/10.1007/978-3-030-92078-4_11)
## Luby-Rackoff Backwards with More Users and More Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#luby-rackoff-backwards-with-more-users-and-more-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#luby-rackoff-backwards-with-more-users-and-more-security)
### Authors
* Srimanta Bhattacharya, SIAS, KREA University, Sri City, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### Abstract
> It is known, from the work of Dai et al. (in CRYPTO’17), that the PRF advantage of \(\mathsf {XORP}\) (bitwise-xor of two outputs of n-bit random permutations with domain separated inputs), against an adversary making q queries, is about \(q/2^n\) for \(q \le 2^{n- 5}\). The same bound can be easily shown to hold for \(\mathsf {XORP}[k]\) (bitwise-xor of k outputs n-bit pseudorandom random permutations with domain separated inputs), for \(k \ge 3\). In this work, we first consider multi-user security of \(\mathsf {XORP}[3]\). We show that the multi-user PRF advantage of \(\mathsf {XORP}[3]\) is about \(\sqrt{uq_{\max }}/2^n\) for all \(q_{\max } \le 2^{n}/12\), where u is the number of users and \(q_{\max }\) is the maximum number of queries the adversary can make to each user. In the multi-user setup, this implies that \(\mathsf {XORP}[3]\) gives security for \(O(2^n)\) users even allowing almost \(O(2^n)\) queries to each user. This also indicates significant improvement in the single-user setup (i.e., when \(u =1\)), where the distinguishing advantage of the adversary even after making \(O(2^n)\) queries is \(O({1 \over \sqrt{2^n}})\), i.e., negligible. Subsequently, we consider a simple efficient variant of \(\mathsf {XORP}[3]\) in which we use five calls to produce 2n bit output (instead of six calls in the case of \(\mathsf {XORP}[3]\)). This variant also achieves similar level of security. As an immediate application, we can construct a variant of block cipher based counter mode which provides much higher security (both in the single-user and the multi-user setup) compared to the security of the encryption part of GCM at the cost of efficiency.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_12](https://doi.org/10.1007/978-3-030-92078-4_12)
## Double-Block-Length Hash Function for Minimum Memory Size.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#double-block-length-hash-function-for-minimum-memory-size)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#double-block-length-hash-function-for-minimum-memory-size)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> Sharing a common primitive for multiple functionalities is essential for lightweight cryptography, and NIST’s lightweight cryptography competition (LWC) considers the integration of hashing to AEAD. While permutations are natural primitive choices in such a goal, for design diversity, it is interesting to investigate how small block-cipher (BC) based and tweakable block-cipher (TBC) based schemes can be. Double-block-length (DBL) hash function modes are suitable to ensure the same security level for AEAD and hashing, but hard to achieve a small memory size. \(\mathsf {Romulus}\), a TBC-based finalist in NIST LWC, introduced the DBL hashing scheme \(\mathsf {Romulus}\hbox {-}\mathsf {H}\), but it requires \(3n+k\) bits of memory using an underlying primitive with an n-bit block and a k-bit (twea)key. Even the smallest DBL modes in the literature require \(2n+k\) bits of memory. Addressing this issue, we present new DBL modes \(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) and \(\mathsf {EXEX}\hbox {-}\mathsf {I}\) achieving \((n+k)\)-bit state size, i.e., no extra memory in addition to \(n+k\) bits needed within the primitive. \(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) is indifferentiable from a random oracle up to \(n- \log n\) bits. By instantiating it with \(\mathsf {SKINNY}\), we can provide hashing to \(\mathsf {Romulus}\) with zero memory overhead. \(\mathsf {EXEX}\hbox {-}\mathsf {I}\) is an optimized mode with collision resistance. We finally compare the hardware performances of \(\mathsf {EXEX}\hbox {-}\mathsf {NI}\), \(\mathsf {EXEX}\hbox {-}\mathsf {I}\), and \(\mathsf {Romulus}\hbox {-}\mathsf {H}\) with \(\mathsf {SKINNY}\hbox {-}\mathsf {128}\hbox {-}\mathsf {384}\). \(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) and \(\mathsf {EXEX}\hbox {-}\mathsf {I}\) achieve the circuit-area reduction by 2,000+ GE, yielding the total areas being smaller than 70% of that of \(\mathsf {Romulus}\hbox {-}\mathsf {H}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_13](https://doi.org/10.1007/978-3-030-92078-4_13)
## Toward a Fully Secure Authenticated Encryption Scheme from a Pseudorandom Permutation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#toward-a-fully-secure-authenticated-encryption-scheme-from-a-pseudorandom-permutation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#toward-a-fully-secure-authenticated-encryption-scheme-from-a-pseudorandom-permutation)
### Authors
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
### Abstract
> In this paper, we propose a new block cipher-based authenticated encryption scheme, dubbed the Synthetic Counter with Masking (\(\mathsf {SCM}\)) mode. \(\mathsf {SCM}\) follows the \(\mathsf {NSIV}\) paradigm proposed by Peyrin and Seurin (CRYPTO 2016), where a keyed hash function accepts a nonce N with associated data and a message, yielding an authentication tag T, and then the message is encrypted by a counter-like mode using both T and N. Here we move one step further by encrypting nonces; in the encryption part, the inputs to the block cipher are determined by T, counters, and an encrypted nonce, and all its outputs are also masked by an (additional) encrypted nonce, yielding keystream blocks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_14](https://doi.org/10.1007/978-3-030-92078-4_14)
## Tight Security for Key-Alternating Ciphers with Correlated Sub-keys.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#tight-security-for-key-alternating-ciphers-with-correlated-sub-keys)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#tight-security-for-key-alternating-ciphers-with-correlated-sub-keys)
### Authors
* Stefano Tessaro, University of Washington, Seattle, USA
* Xihu Zhang, University of Washington, Seattle, USA
### Abstract
> A substantial effort has been devoted to proving optimal bounds for the security of key-alternating ciphers with independent sub-keys in the random permutation model (e.g., Chen and Steinberger, EUROCRYPT ’14; Hoang and Tessaro, CRYPTO ’16). While common in the study of multi-round constructions, the assumption that sub-keys are truly independent is not realistic, as these are generally highly correlated and generated from shorter keys.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_15](https://doi.org/10.1007/978-3-030-92078-4_15)
## FAST: Secure and High Performance Format-Preserving Encryption and Tokenization.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#fast-secure-and-high-performance-format-preserving-encryption-and-tokenization)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#fast-secure-and-high-performance-format-preserving-encryption-and-tokenization)
### Authors
* F. Betül Durak, Microsoft Research, Redmond, USA
* Henning Horst, Comforte AG, Wiesbaden, Germany
* Michael Horst, Comforte AG, Wiesbaden, Germany
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### Abstract
> We propose a new construction for format-preserving encryption. Our design provides the flexibility for use in format-preserving encryption (FPE) and for static table-driven tokenization. Our algorithm is a substitution-permutation network based on random Sboxes. Using pseudorandom generators and pseudorandom functions, we prove a strong adaptive security based on the super-pseudorandom permutation assumption of our core design. We obtain empirical parameters to reach this assumption. We suggest parameters for quantum security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_16](https://doi.org/10.1007/978-3-030-92078-4_16)
## Fine-Tuning the ISO/IEC Standard LightMAC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#fine-tuning-the-iso-iec-standard-lightmac)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#fine-tuning-the-iso-iec-standard-lightmac)
### Authors
* Soumya Chattopadhyay, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> LightMAC, by Luykx et al., is a block cipher based message authentication code (MAC). The simplicity of design and low overhead allows it to have very compact implementations. As a result, it has been recently chosen as an ISO/IEC standard MAC for lightweight applications. LightMAC has been shown to achieve query-length independent security bound of \( O(q^2/2^n) \) when instantiated with two independently keyed n-bit block ciphers, where q denotes the number of MAC queries and the query-length is upper bounded by \( (n-s)2^{s} \) bits for a fixed counter size s. In this paper, we aim to minimize the number of block cipher keys in LightMAC. First, we show that the original LightMAC instantiated with a single block cipher key, referred as 1k-LightMAC, achieves security bound of \( O(q^2/2^n) \) while the query-length is at least \( (n-s) \) bits and at most \( (n-s)\min \{2^{n/4},2^s\} \) bits. Second, we show that a minor variant of 1k-LightMAC, dubbed as LightMAC-ds, achieves security bound of \( O(q^2/2^n) \) while query-length is upper bounded by \( (n-s)2^{s-1} \) bits. Of independent interest, our security proof of 1k-LightMAC employs a novel sampling approach, called the reset-sampling, as a subroutine within the H-coefficient proof setup.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_17](https://doi.org/10.1007/978-3-030-92078-4_17)
## Categorization of Faulty Nonce Misuse Resistant Message Authentication.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#categorization-of-faulty-nonce-misuse-resistant-message-authentication)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#categorization-of-faulty-nonce-misuse-resistant-message-authentication)
### Authors
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> A growing number of lightweight block ciphers are proposed for environments such as the Internet of Things. An important contribution to the reduced implementation cost is a block length n of 64 or 96 bits rather than 128 bits. As a consequence, encryption modes and message authentication code (MAC) algorithms require security beyond the \(2^{n/2}\) birthday bound. This paper provides an extensive treatment of MAC algorithms that offer beyond birthday bound PRF security for both nonce-respecting and nonce-misusing adversaries. We study constructions that use two block cipher calls, one universal hash function call and an arbitrary number of XOR operations. We start with the separate problem of generically identifying all possible secure \(n\)-to-\(n\)-bit pseudorandom functions (PRFs) based on two block cipher calls. The analysis shows that the existing constructions EDM, SoP, and EDMD are the only constructions of this kind that achieve beyond birthday bound security. Subsequently we deliver an exhaustive treatment of MAC algorithms, where the outcome of a universal hash function evaluation on the message may be entered at any point in the computation of the PRF. We conclude that there are a total amount of nine schemes that achieve beyond birthday bound security, and a tenth construction that cannot be proven using currently known proof techniques. For these former nine MAC algorithms, three constructions achieve optimal n-bit security in the nonce-respecting setting, but are completely insecure if the nonce is reused. The remaining six constructions have 3n/4-bit security in the nonce-respecting setting, and only four out of these six constructions still achieve beyond the birthday bound security in the case of nonce misuse.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_18](https://doi.org/10.1007/978-3-030-92078-4_18)
## Balanced Non-adjacent Forms.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#balanced-non-adjacent-forms)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#balanced-non-adjacent-forms)
### Authors
* Marc Joye, Zama, Paris, France
### Abstract
> Integers can be decomposed in multiple ways. The choice of a recoding technique is generally dictated by performance considerations. The usual metric for optimizing the decomposition is the Hamming weight. In this work, we consider a different metric and propose new modified forms (i.e., integer representations using signed digits) that satisfy minimality requirements under the new metric. Specifically, we introduce what we call balanced non-adjacent forms and prove that they feature a minimal Euclidean weight. We also present efficient algorithms to produce these new minimal forms. We analyze their asymptotic and exact distributions. We extend the definition to modular integers and show similar optimality results. The balanced non-adjacent forms find natural applications in fully homomorphic encryption as they optimally reduce the noise variance in LWE-type ciphertexts.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_19](https://doi.org/10.1007/978-3-030-92078-4_19)
## Efficient Boolean Search over Encrypted Data with Reduced Leakage.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#efficient-boolean-search-over-encrypted-data-with-reduced-leakage)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#efficient-boolean-search-over-encrypted-data-with-reduced-leakage)
### Authors
* Sarvar Patel, Google LLC, Mountain View, USA
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Joon Young Seo, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
### Abstract
> Encrypted multi-maps enable outsourcing the storage of a multi-map to an untrusted server while maintaining the ability to query privately. We focus on encrypted Boolean multi-maps that support arbitrary Boolean queries over the multi-map. Kamara and Moataz [Eurocrypt’17] presented the first encrypted multi-map, BIEX, that supports CNF queries with optimal communication, worst-case sublinear search time and non-trivial leakage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_20](https://doi.org/10.1007/978-3-030-92078-4_20)
## Revisiting Homomorphic Encryption Schemes for Finite Fields.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#revisiting-homomorphic-encryption-schemes-for-finite-fields)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#revisiting-homomorphic-encryption-schemes-for-finite-fields)
### Authors
* Andrey Kim, New Jersey Institute of Technology, Newark, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Yuriy Polyakov, Duality Technologies, Newark, USA
* Vincent Zucca, DALI, Université de Perpignan Via Domitia, Perpignan, France
* Vincent Zucca, LIRMM, Univ Montpellier, Montpellier, France
* Vincent Zucca, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> The Brakerski-Gentry-Vaikuntanathan (BGV) and Brakerski/ Fan-Vercauteren (BFV) schemes are the two main homomorphic encryption (HE) schemes to perform exact computations over finite fields and integers. Although the schemes work with the same plaintext space, there are significant differences in their noise management, algorithms for the core homomorphic multiplication operation, message encoding, and practical usability. The main goal of our work is to revisit both schemes, focusing on closing the gap between the schemes by improving their noise growth, computational complexity of the core algorithms, and usability. The other goal of our work is to provide both theoretical and experimental performance comparison of BGV and BFV.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_21](https://doi.org/10.1007/978-3-030-92078-4_21)
## Transciphering Framework for Approximate Homomorphic Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#transciphering-framework-for-approximate-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#transciphering-framework-for-approximate-homomorphic-encryption)
### Authors
* Jihoon Cho, Samsung SDS, Seoul, Korea
* Joohee Lee, Samsung SDS, Seoul, Korea
* Dukjae Moon, Samsung SDS, Seoul, Korea
* Hyojin Yoon, Samsung SDS, Seoul, Korea
* Jincheol Ha, KAIST, Daejeon, Korea
* Seongkwang Kim, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### Abstract
> Homomorphic encryption (HE) is a promising cryptographic primitive that enables computation over encrypted data, with a variety of applications including medical, genomic, and financial tasks. In Asiacrypt 2017, Cheon et al. proposed the \(\mathsf {CKKS}\) scheme to efficiently support approximate computation over encrypted data of real numbers. HE schemes including \(\mathsf {CKKS}\), nevertheless, still suffer from slow encryption speed and large ciphertext expansion compared to symmetric cryptography.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_22](https://doi.org/10.1007/978-3-030-92078-4_22)
## Improved Programmable Bootstrapping with Larger Precision and Efficient Arithmetic Circuits for TFHE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#improved-programmable-bootstrapping-with-larger-precision-and-efficient-arithmetic-circuits-for-tfhe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#improved-programmable-bootstrapping-with-larger-precision-and-efficient-arithmetic-circuits-for-tfhe)
### Authors
* Ilaria Chillotti, Zama, Paris, France
* Damien Ligier, Zama, Paris, France
* Jean-Baptiste Orfila, Zama, Paris, France
* Samuel Tap, Zama, Paris, France
### Abstract
> Fully Homomorphic Encryption (FHE) schemes enable to compute over encrypted data. Among them, TFHE [8] has the great advantage of offering an efficient method for bootstrapping noisy ciphertexts, i.e., reduce the noise. Indeed, homomorphic computation increases the noise in ciphertexts and might compromise the encrypted message. TFHE bootstrapping, in addition to reducing the noise, also evaluates (for free) univariate functions expressed as look-up tables. It however requires to have the most significant bit of the plaintext to be known a priori, resulting in the loss of one bit of space to store messages. Furthermore it represents a non negligible overhead in terms of computation in many use cases.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_23](https://doi.org/10.1007/978-3-030-92078-4_23)
